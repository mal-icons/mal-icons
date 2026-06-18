import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-dinersclub",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDinersclub {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.51 11.98a6.03 6.03 0 0 0-3.87-5.62V17.6a6.03 6.03 0 0 0 3.87-5.62zM8.33 17.6V6.37a6.03 6.03 0 0 0-3.86 5.62 6.03 6.03 0 0 0 3.86 5.62zm2.16-15.11A9.5 9.5 0 0 0 0.99 11.98a9.49 9.49 0 0 0 9.49 9.49c5.25 0 9.49-4.25 9.5-9.49a9.5 9.5 0 0 0-9.5-9.5Zm-0.02 19.89C4.72 22.4 0 17.75 0 12.09 0 5.91 4.72 1.63 10.46 1.63h2.69C18.82 1.63 24 5.9 24 12.09c0 5.66-5.18 10.28-10.85 10.28"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDinersclub;
