import PageLayout from "@src/components/PageLayout";
import '@css/index.css'

export default function TermsOfService() {

    return (
        <PageLayout>
            <div className="m-5">

                <h1 className="dark:text-whiteText text-4xl font-Monocraft font-bold text-blackText"> Terms of Service</h1>
                <br />
                <span className="dark:text-gray-300 text-gray-900 font-Monocraft">Last updated: 09/10/26</span>
                <br />
                <div className="font-Monocraft m-6 dark:text-whiteText  text-blackText">
                    By using this Discord bot enderbot, you agree to the following terms:
                    <br />
                    <br />
                    1. Acceptable Use
                    You must always comply with Discords Terms of Service and Community Guidelines.
                    You may not use the Bot for harmful or illegal activities.
                    <br />
                    <br />
                    2. Availability
                    The bot can shutdown for maintanance or updates.
                    <br />
                    <br />
                    3. Limitation of Liability
                    The creator of the Bot is not responsible for any damages resulting from the use or misuse of the Bot.
                    <br />
                    <br />
                    4. Changes to the Terms
                    The terms of service, when updated or if there are going to be changes, will be notified, and you will be informed so that nothing is changed without your consent.
                </div>

            </div>
        </PageLayout>
    );
};
