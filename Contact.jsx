import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    role: '',
    phone: '',
    email: '',
    contactPreference: '',
    budget: '',
    services: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.companyName || !formData.services) {
      toast({
        title: t('contact.form.error.title'),
        description: t('contact.form.error.description'),
        variant: "destructive"
      });
      return;
    }

    setIsSending(true);

    try {
      const serviceID = 'service_ks99dgf';
      const publicKey = 'E16zOSfMj_SxEdzR3';
      const notificationTemplateID = 'template_qu4tk7t';
      const autoReplyTemplateID = 'template_uo2q9q5';

      await emailjs.send(serviceID, notificationTemplateID, formData, publicKey);

      if (formData.email) {
        await emailjs.send(serviceID, autoReplyTemplateID, formData, publicKey);
      }

      toast({
        title: t('contact.form.success.title'),
        description: t('contact.form.success.description'),
      });

      setFormData({
        fullName: '',
        companyName: '',
        role: '',
        phone: '',
        email: '',
        contactPreference: '',
        budget: '',
        services: '',
        message: ''
      });

    } catch (error) {
      console.error('Failed to send email(s).', error);
      toast({
        title: t('contact.form.senderror.title'),
        description: t('contact.form.senderror.description'),
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };
  
  const budgetOptions = [
    { value: 'under-1500', label: t('contact.form.budget.option1') },
    { value: '1500-5000', label: t('contact.form.budget.option2') },
    { value: '5000-10000', label: t('contact.form.budget.option3') },
    { value: '10000-25000', label: t('contact.form.budget.option4') },
    { value: 'over-25000', label: t('contact.form.budget.option5') },
  ];

  const servicesOptions = [
    { value: 'website', label: t('contact.form.services.website') },
    { value: 'ai', label: t('contact.form.services.ai') },
    { value: 'both', label: t('contact.form.services.both') }
  ];

  const contactPreferenceOptions = [
    { value: 'phone', label: t('contact.form.preference.phone') },
    { value: 'email', label: t('contact.form.preference.email') },
    { value: 'either', label: t('contact.form.preference.either') }
  ];

  return (
    <div className="glass-effect p-8 rounded-2xl">
      <h2 className="text-2xl font-bold text-white mb-6">{t('contact.form.title')}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t('contact.form.name')} *
            </label>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder={t('contact.form.name.placeholder')}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t('contact.form.company')} *
            </label>
            <Input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder={t('contact.form.company.placeholder')}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t('contact.form.role')}
            </label>
            <Input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              placeholder={t('contact.form.role.placeholder')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t('contact.form.phone')}
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={t('contact.form.phone.placeholder')}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t('contact.form.email')}
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t('contact.form.email.placeholder')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t('contact.form.preference')}
            </label>
            <Select
              name="contactPreference"
              value={formData.contactPreference}
              onChange={handleInputChange}
            >
              <option value="">{t('contact.form.preference.placeholder')}</option>
              {contactPreferenceOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t('contact.form.budget')}
            </label>
            <Select
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
            >
              <option value="">{t('contact.form.budget.placeholder')}</option>
              {budgetOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t('contact.form.services')} *
            </label>
            <Select
              name="services"
              value={formData.services}
              onChange={handleInputChange}
              required
            >
              <option value="">{t('contact.form.services.placeholder')}</option>
              {servicesOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {t('contact.form.message')}
          </label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t('contact.form.message.placeholder')}
            rows={5}
          />
        </div>

        <Button type="submit" className="btn-primary w-full py-3 text-lg font-semibold" disabled={isSending}>
          {isSending ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Send className="mr-2 w-5 h-5" />
          )}
          {isSending ? t('contact.form.sending') : t('contact.form.submit')}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;