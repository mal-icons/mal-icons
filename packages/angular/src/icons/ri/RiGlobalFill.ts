import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-global-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGlobalFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.05 13H7.53C7.71 16.27 8.76 19.31 10.45 21.88C5.99 21.19 2.5 17.54 2.05 13ZM2.05 11C2.5 6.46 5.99 2.81 10.45 2.12C8.76 4.69 7.71 7.73 7.53 11H2.05ZM21.95 11H16.47C16.29 7.73 15.24 4.69 13.55 2.12C18.01 2.81 21.5 6.46 21.95 11ZM21.95 13C21.5 17.54 18.01 21.19 13.55 21.88C15.24 19.31 16.29 16.27 16.47 13H21.95ZM9.53 13H14.47C14.3 15.78 13.41 18.37 12 20.59C10.59 18.37 9.7 15.78 9.53 13ZM9.53 11C9.7 8.22 10.59 5.63 12 3.41C13.41 5.63 14.3 8.22 14.47 11H9.53Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGlobalFill;
