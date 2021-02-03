import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

import ContextMenuService from 'glimmer-context-menu/services/context-menu';

class ContextMenuOption {
  action: () => void;
  icon: string;
  label: string;

  constructor(action: () => void, icon: string, label: string) {
    this.action = action;
    this.icon = icon;
    this.label = label;
  }
}

export default class MenuTargetComponent extends Component {
  @service contextMenu!: ContextMenuService;

  contextItems: ContextMenuOption[] | null = null;
  contextSelection: any;
  contextDetails: any;

  constructor(owner, args) {
    super(owner, args);

    this.contextItems = [
      new ContextMenuOption(() => {}, 'rename', 'Rename Palette'),
    ];
  }

  @action
  contextMenuTrigger(e: Event): void {
    const items = this.contextItems;
    const selection = this.contextSelection;
    const details = this.contextDetails;

    if (items && items.length) {
      e.preventDefault();
      this.contextMenu.activate(e, items, selection, details);
    }
  }
}
