"use client";
import { useState } from "react";
import React from "react";
export default function Contact(){

const [isSubmitting, setIsSubmitting] = useState(false);
const [message, setMessage] = useState("");
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   

const form = e.currentTarget;
const formData = new FormData(form);

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        projectType: formData.get("project"),
        budget: formData.get("budget"),
        message: formData.get("message")
    };

    try {
        setIsSubmitting(true);
        setMessage("");

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        if (!response.ok) {
            setMessage(result.message);
            return;
        }

        setMessage("Your project inquiry has been sent successfully.");
       form.reset();

    } catch (error) {
        console.error(error);
        setMessage("Something went wrong. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
};

    return(
        <main className="contact-page">
{/*Section*/}
<section id="contact">
<section className="contact-hero section">
    <div className="container contact-hero section">
        <div className="contact-hero__content">
            <p className="contact-hero__eyebrow">
                GET IN TOUCH
            </p>
            <h1 className="contact-hero__title">
                 Let&apos;s Build Something Great Together
            </h1>
            <p className="contact-hero__description">
                 Have an idea, project, or digital challenge?
              Tell us what you&apos;re looking to build and
              let&apos;s turn it into a practical digital solution.
            </p>
            <a href="#contact-form"
            className="contact-hero__button">
                 Start a Conversation
            </a>
        </div>
       {/* =========================
    CONTACT FORM
========================= */}
<section className="contact-form-section section" id="project-form">
  <div className="container">

    <div className="section-heading contact-form__heading">
      <p className="section-heading__eyebrow">
        START A PROJECT
      </p>

      <h2 className="section-heading__title">
        Tell Us About Your Project
      </h2>

      <p className="contact-form__intro">
        Share a few details about your idea, requirements,
        or project goals. We&apos;ll use this information
        to understand how we can help.
      </p>
    </div>

    <form className="contact-form" onSubmit={handleSubmit}>

      <div className="contact-form__grid">

        <div className="contact-form__field">
          <label htmlFor="name">
            Your Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
             required
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">
            Email Address
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
             required
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="project">
            Project Type
          </label>

          <select
            id="project"
            name="project"
            defaultValue=""
             required
          >
            <option value="" disabled>
              Select a project type
            </option>

            <option value="web-development">
              Web Development
            </option>

            <option value="cms">
              CMS Development
            </option>

            <option value="dashboard">
              Dashboard / Management System
            </option>

            <option value="ai">
              Full-Stack Application
            </option>

            <option value="other">
              Other
            </option>
          </select>
        </div>

        <div className="contact-form__field">
          <label htmlFor="budget">
            Project Budget
          </label>

          <select
            id="budget"
            name="budget"
            defaultValue=""
          >
            <option value="" disabled>
              Select a budget range
            </option>

            <option value="small">
              Small Project
            </option>

            <option value="medium">
              Medium Project
            </option>

            <option value="large">
              Large Project
            </option>

            <option value="discuss">
              Let&apos;s Discuss
            </option>
          </select>
        </div>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="message">
            Project Details
          </label>

          <textarea
            id="message"
            name="message"
            rows={7}
            placeholder="Tell us about your project..."
            required
          ></textarea>
        </div>

      </div>

     <button
    type="submit"
    className="contact-form__button"
    disabled={isSubmitting}
>
    <span>
        {isSubmitting ? "Sending..." : "Send Project Inquiry"}
    </span>
</button>
{message && (
    <p className="contact-form__message" role="status">
        {message}
    </p>
)}
    </form>

  </div>
</section>
    </div>
</section>
</section>
        </main>
    )
}