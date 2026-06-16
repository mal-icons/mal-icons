import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-no-accounts",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfNoAccounts {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.18 10.94c0.2-0.440.32-0.920.32-1.44C15.5 7.57 13.93 6 12 6c-0.52 0-1 0.12-1.440.32l4.62 4.62z"}],["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13c-2.32 0-4.450.8-6.14 2.12A7.96 7.96 0 0 1 4 12c0-1.850.63-3.55 1.69-4.9l2.86 2.86a3.47 3.47 0 0 0 2.99 2.99l2.2 2.2c-0.57-0.1-1.15-0.15-1.74-0.15zm6.31 1.9L7.1 5.69A7.9 7.9 0 0 1 12 4c4.42 0 8 3.58 8 8 0 1.85-0.63 3.54-1.69 4.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfNoAccounts;
