import reading_pgn_from_the_dgt_electronic_chessboard
    from './markdown/reading-pgn-from-the-dgt-electronic-chessboard.md'
import unitywebrequest_and_tmp_dropdown_making_a_dynamic_dropdown_in_unity
    from './markdown/unitywebrequest-and-tmp-dropdown-making-a-dynamic-dropdown-in-unity.md'
import building_a_discord_bot_with_discord_js from './markdown/building-a-discord-bot-with-discord-js.md'
import checking_out_the_mc_707_fireware_update_1_72 from './markdown/checking-out-the-mc-707-fireware-update-1-72.md'
import creating_a_custom_toolchain_for_react from './markdown/creating-a-custom-toolchain-for-react.md'
import mounting_volume_made_from_snapshot_to_ec2 from './markdown/mounting-volume-made-from-snapshot-to-ec2.md'
import recording_audio_over_usb_otg_with_the_mc_707
    from './markdown/recording-audio-over-usb-otg-with-the-mc-707.md'

let config = {
    header: {
        title: "atronandbeyond.com",
        tagline: "Beats and Code"
    },
    footer: {
        tagline: 'atronandbeyond.com © 2021',
        github: "https://github.com/awayawm",
        linkedin: "https://www.linkedin.com/in/aaron-myers-88b52683",
        twitter: ""
    },
    tags: [
        {
            id: 1,
            name: "Home",
            link: "/",
            enabled: true,
            icon: "🏡 ",
        },
        {
            id: 2,
            name: "Chess",
            link: "/tags/chess",
            enabled: false,
            icon: "♟️",
        },
        {
            id: 3,
            name: "Beats",
            link: "/tags/beats",
            enabled: true,
            icon: "🎶",
        },
        {
            id: 4,
            name: "Code",
            link: "/tags/code",
            enabled: true,
            icon: "💻",
        },
        {
            id: 5,
            name: "Aws",
            link: "/tags/aws",
            enabled: true,
            icon: "☁️",
        },

    ],
    articles: [
        {
            enabled: true,
            title: "Reading PGN from the DGT Electronic Chessboard",
            link: "reading-pgn-from-the-dgt-electronic-chessboard",
            tags: [1, 2, 4],
            date: "2021-06-20",
            content: reading_pgn_from_the_dgt_electronic_chessboard,
            preview_length: 300
        },
        {
            enabled: false,
            title:
                "UnityWebRequest and Tmp_Dropdown: Making a dynamic dropdown in Unity",
            link: "unitywebrequest-and-tmp-dropdown-making-a-dynamic-dropdown-in-unity",
            tags: [3],
            date: "2021-06-20",
            content: unitywebrequest_and_tmp_dropdown_making_a_dynamic_dropdown_in_unity,
            preview_length: 300
        },
        {
            enabled: true,
            title: "Building a Discord Bot with Discord.js",
            link: "building-a-discord-bot-with-discord-js",
            tags: [1, 4],
            date: "2021-06-20",
            content: building_a_discord_bot_with_discord_js,
            preview_length: 300
        },
        {
            enabled: false,
            title: "Checking Out Mc-707 Firmware update 1.72",
            link: "checking-out-the-mc-707-fireware-update-1-72",
            tags: [2],
            date: "2021-06-20",
            content: checking_out_the_mc_707_fireware_update_1_72,
            preview_length: 300
        },
        {
            enabled: false,
            title: "Creating a Custom Toolchain for React",
            link: "creating-a-custom-toolchain-for-react",
            tags: [3],
            date: "2021-06-20",
            content: creating_a_custom_toolchain_for_react,
            preview_length: 300
        },
        {
            enabled: true,
            title: "Mounting a Snapshot to an EC2 Machine",
            link: "mounting-volume-made-from-snapshot-to-ec2",
            tags: [1, 5, 4],
            date: "2021-07-02",
            content: mounting_volume_made_from_snapshot_to_ec2,
            preview_length: 300
        },
        {
            enabled: true,
            title: "Recording Audio Over USB-OTG with the MC-707",
            link: "recording-audio-over-usb-otg-with-the-mc-707",
            tags: [1, 3],
            date: "2021-09-18",
            content: recording_audio_over_usb_otg_with_the_mc_707,
            preview_length: 300
        },
    ],
}
export default config;
