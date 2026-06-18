import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-voelkner",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiVoelkner {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.4 3.5C18.09 8.84 15.02 16.05 11.96 16.05S5.84 8.83 4.55 3.5H0c0.23 1.01 1.12 4.71 2.6 8.12 2.54 5.89 5.7 8.88 9.37 8.88s6.83-2.99 9.39-8.89C22.81 8.25 23.74 4.59 24 3.5h-4.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiVoelkner;
