import PageLayout from "@src/components/PageLayout";
import '@css/index.css'

export default function PolicyPrivacy({ user }: { user: any }) {

    return (
        <PageLayout user={user}>
            <div className="m-5">

                <h1 className="dark:text-whiteText text-4xl font-Monocraft font-bold text-blackText">Policy Privacy</h1>
                <br />
                <span className="dark:text-gray-300 text-gray-900 font-Monocraft">Last updated: 09/10/26</span>
                <br />
                <div className="font-Monocraft m-6 dark:text-whiteText  text-blackText">
                    The Bot dont store any personal data and any collected data without you knowledge.
                    <br />
                    <br />
                    The bot Store data for commands useful for example configuration setting, moderations commands and notes.
                    <br />
                    <br />
                    The bot does not share any data with third parties.
                    <br />
                    <br />
                    By using the bot, you consent to this privacy policy.
                    <br />
                    <br />
                    If you have any questions about this privacy policy, please contact the bot creator.
                    <br />
                    <br />
                    This policy may be updated at any time. Users are encouraged to review it periodically.
                    <br />
                    <br />
                    In another case, Could you try to see the Terms Of service;
                </div>

            </div>
        </PageLayout>
    );
};
