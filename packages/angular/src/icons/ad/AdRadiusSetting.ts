import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ad-radius-setting",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class AdRadiusSetting {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M396 140h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-44 684h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm524-204h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 344h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 160h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 160h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 160h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm320 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm160 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm140-284c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V370c0-127-103-230-230-230H484c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h170c87.3 0 158 70.7 158 158v170zM236 96H92c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8zm-48 101.6c0 1.3-1.1 2.4-2.4 2.4h-43.2c-1.3 0-2.4-1.1-2.4-2.4v-43.2c0-1.3 1.1-2.4 2.4-2.4h43.2c1.3 0 2.4 1.1 2.4 2.4v43.2zM920 780H776c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8V788c0-4.4-3.6-8-8-8zm-48 101.6c0 1.3-1.1 2.4-2.4 2.4h-43.2c-1.3 0-2.4-1.1-2.4-2.4v-43.2c0-1.3 1.1-2.4 2.4-2.4h43.2c1.3 0 2.4 1.1 2.4 2.4v43.2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default AdRadiusSetting;
