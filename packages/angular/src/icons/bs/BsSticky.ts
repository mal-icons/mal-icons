import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-sticky",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSticky {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.09a1.5 1.5 0 0 0 1.06-0.44l4.92-4.91A1.5 1.5 0 0 0 15 8.59V2.5A1.5 1.5 0 0 0 13.5 1zM2 2.5a0.50.5 0 0 1 0.5-0.5h11a0.50.5 0 0 1 0.50.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a0.50.5 0 0 1-0.5-0.5zm7 11.29V9.5a0.50.5 0 0 1 0.5-0.5h4.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSticky;
