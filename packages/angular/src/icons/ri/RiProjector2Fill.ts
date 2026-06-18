import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-projector-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiProjector2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 19V21H20V19H4V21H2V19C1.45 19 1 18.55 1 18V6C1 5.45 1.45 5 2 5H11.81C12.99 3.77 14.66 3 16.5 3C18.34 3 20.01 3.77 21.19 5H22C22.55 5 23 5.45 23 6V18C23 18.55 22.55 19 22 19ZM16.5 14C18.99 14 21 11.99 21 9.5C21 7.01 18.99 5 16.5 5C14.01 5 12 7.01 12 9.5C12 11.99 14.01 14 16.5 14ZM16.5 12C15.12 12 14 10.88 14 9.5C14 8.12 15.12 7 16.5 7C17.88 7 19 8.12 19 9.5C19 10.88 17.88 12 16.5 12ZM4 13V15H6V13H4ZM8 13V15H10V13H8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiProjector2Fill;
