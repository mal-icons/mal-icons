import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-type-h4",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTypeH4 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.01 3H15v10h-1.29v-2.05H8.85v-1.18C10.1 7.51 11.59 5.26 13.01 3m-2.82 6.78h3.52v-5.62h-0.07a95 95 0 0 0-3.45 5.55zM7.5 13V3.2H6.17v4.15H1.32V3.2H0V13h1.32V8.51h4.85V13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTypeH4;
