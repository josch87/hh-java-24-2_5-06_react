import {Card, Avatar, Text, Group, Button} from '@mantine/core';
import classes from './UserCardImage.module.css';

type User = {
    name: string,
    position: string,
    avatar: string,
    backgroundImage: string,
    button: {
        text: string,
        url: string,
    },
    stats:
        {
            value: string,
            label: string,
        }[]

}

type Props = {
    user: User,
};


export function UserCardImage({user}: Props) {
    const items = user.stats.map((stat) => (
        <div key={stat.label}>
            <Text ta="center" fz="lg" fw={500}>
                {stat.value}
            </Text>
            <Text ta="center" fz="sm" c="dimmed" lh={1}>
                {stat.label}
            </Text>
        </div>
    ));

    return (
        <Card withBorder padding="xl" radius="md" className={classes.card}>
            <Card.Section
                h={140}
                style={{
                    backgroundImage:
                        `url(${user.backgroundImage}`,
                }}
            />
            <Avatar
                src={user.avatar}
                size={80}
                radius={80}
                mx="auto"
                mt={-30}
                className={classes.avatar}
            />
            <Text ta="center" fz="lg" fw={500} mt="sm">
                {user.name}
            </Text>
            <Text ta="center" fz="sm" c="dimmed">
                {user.position}
            </Text>
            <Group mt="md" justify="center" gap={30}>
                {items}
            </Group>
            <Button fullWidth radius="md" mt="xl" size="md" variant="default"
                    onClick={() => window.open(user.button.url)}>
                {user.button.text}
            </Button>
        </Card>
    );
}