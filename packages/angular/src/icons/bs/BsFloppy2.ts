import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-floppy2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFloppy2 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.5 0h11.59a1.5 1.5 0 0 1 1.060.44l1.42 1.41A1.5 1.5 0 0 1 16 2.91V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a0.50.5 0 0 0 0.50.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h0.5a0.50.5 0 0 0 0.5-0.5V2.91a0.50.5 0 0 0-0.15-0.35l-1.41-1.41A0.50.5 0 0 0 13.09 1H13v3.5A1.5 1.5 0 0 1 11.5 6h-7A1.5 1.5 0 0 1 3 4.5V1H1.5a0.50.5 0 0 0-0.50.5m9.5-0.5a0.50.5 0 0 0-0.50.5v3a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-3a0.50.5 0 0 0-0.5-0.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFloppy2;
