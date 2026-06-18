import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-repeat-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRepeat2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 20V21.93C8 22.21 7.78 22.43 7.5 22.43C7.38 22.43 7.27 22.39 7.18 22.32L3.06 18.88C2.85 18.71 2.82 18.39 3 18.18C3.09 18.07 3.23 18 3.38 18L18 18C19.1 18 20 17.1 20 16V8H22V16C22 18.21 20.21 20 18 20H8ZM16 4V2.07C16 1.79 16.22 1.57 16.5 1.57C16.62 1.57 16.73 1.61 16.82 1.68L20.94 5.12C21.15 5.29 21.18 5.61 21 5.82C20.91 5.93 20.77 6 20.62 6L6 6C4.9 6 4 6.9 4 8V16H2V8C2 5.79 3.79 4 6 4H16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRepeat2Fill;
