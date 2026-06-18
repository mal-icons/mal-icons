import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-brain-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBrain2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.5 2C6.57 2 5 3.57 5 5.5C5 5.68 5.01 5.86 5.04 6.03C3.32 6.26 2 7.72 2 9.5C2 10.48 2.4 11.36 3.05 12C2.4 12.64 2 13.52 2 14.5C2 15.9 2.82 17.11 4.01 17.67C4 17.78 4 17.89 4 18C4 20.21 5.79 22 8 22C9.19 22 10.27 21.48 11 20.65V3.05C10.36 2.4 9.48 2 8.5 2ZM13 3.05V20.65C13.73 21.48 14.81 22 16 22C18.21 22 20 20.21 20 18C20 17.89 20 17.78 19.99 17.67C21.18 17.11 22 15.9 22 14.5C22 13.52 21.6 12.64 20.95 12C21.6 11.36 22 10.48 22 9.5C22 7.72 20.68 6.26 18.96 6.03C18.99 5.86 19 5.68 19 5.5C19 3.57 17.43 2 15.5 2C14.52 2 13.64 2.4 13 3.05Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBrain2Fill;
