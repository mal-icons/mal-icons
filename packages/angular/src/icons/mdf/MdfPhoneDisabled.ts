import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-phone-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfPhoneDisabled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m17.34 14.54-1.43-1.43c0.56-0.73 1.05-1.5 1.47-2.32l-2.2-2.2c-0.28-0.28-0.36-0.67-0.25-1.020.37-1.120.57-2.320.57-3.57 0-0.550.45-1 1-1H20c0.55 0 1 0.45 1 1 0 3.98-1.37 7.64-3.66 10.54zm-2.82 2.81A16.88 16.88 0 0 1 4 21c-0.55 0-1-0.45-1-1v-3.49c0-0.550.45-1 1-1 1.24 0 2.45-0.2 3.57-0.570.35-0.120.75-0.03 1.020.24l2.2 2.2c0.81-0.42 1.58-0.9 2.3-1.46L1.39 4.22l1.42-1.41L21.19 21.2l-1.41 1.41-5.26-5.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfPhoneDisabled;
