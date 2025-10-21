import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import { theme } from '../../../../utils/theme';
import { useState } from 'react';
import { Task } from '../../../../store/useTaskStore';
import { RoundButton } from '../../../../components/RoundButton';
import { PenIcon, SpotIcon, TrashIcon } from '../../../../components/Icons';

type Props = {
  data: Task;
  onDelete?: (id: string) => void;
};

export const TaskCard = ({ data, onDelete }: Props) => {
  const [value, setValue] = useState(data.completed);

  const onClick = () => {
    setValue(prev => !prev);
  };

  const handleDelete = () => {
    onDelete?.(data.id);
  };

  return (
    <View style={s.container}>
      <View
        style={[
          s.lightCommon,
          s.lightRed,
          data.type === 'urgent' && s.lightRed,
          data.type === 'regular' && s.lightYello,
          data.type === 'low' && s.lightGreen,
        ]}
      />

      <View style={s.checkboxGroup}>
        <View style={s.checkboxWrapper}>
          <Checkbox
            value={value}
            style={[s.checkbox]}
            color={value ? theme.color.primary.purple : undefined}
            onValueChange={onClick}
          />
        </View>

        <View style={s.dataBlock}>
          <Pressable onPress={onClick}>
            <Text style={s.title}>{data.title}</Text>
          </Pressable>

          <View style={s.addressWrapper}>
            <SpotIcon width={10} height={10} color="#5E6178" />
            <Text style={s.address}>393 Lewis Ave, Brooklyn, NY 11233</Text>
          </View>

          <View style={s.buttonGroup}>
            <RoundButton onPress={handleDelete}>
              <TrashIcon width={16} height={16} color="#6871EE" />
            </RoundButton>

            <RoundButton>
              <PenIcon width={16} height={16} color="#6871EE" />
            </RoundButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
    backgroundColor: theme.color.base.white,
    borderRadius: 8,
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 6,
  },

  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  lightCommon: {
    height: 26,
    width: 3,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },

  lightRed: {
    backgroundColor: '#DF7E8D',
  },
  lightYello: {
    backgroundColor: '#F8D94F',
  },
  lightGreen: {
    backgroundColor: '#77D4BD',
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  checkboxGroup: {
    flex: 1,
    flexDirection: 'row',
  },

  checkboxWrapper: {
    paddingTop: 5,
  },

  checkbox: {
    marginRight: theme.spacing(1),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#484C5333',
    backgroundColor: theme.color.base.white,
    height: 16,
    width: 16,
  },

  dataBlock: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 4,
  },

  addressWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 6,
    gap: 4,
  },

  address: {
    fontSize: 12,
    color: '#5E6178',
  },

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 10,
    gap: 8,
  },
});
