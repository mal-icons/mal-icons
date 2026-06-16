import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-settings-phone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSettingsPhone {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-0.2-3.57-0.57a1.02 1.02 0 0 0-1.020.24l-2.2 2.2a15.07 15.07 0 0 1-6.59-6.58l2.2-2.21c0.28-0.270.36-0.660.25-1.01A11.36 11.36 0 0 1 8.5 4c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1 0 9.39 7.61 17 17 17 0.55 0 1-0.45 1-1v-3.5c0-0.55-0.45-1-1-1zM19 9v2h2V9h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSettingsPhone;
