import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fa-book-tanakh",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FaBookTanakh {
  readonly viewBox = "0 0 448 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M352 0c53 0 96 43 96 96l0 320c0 53-43 96-96 96L64 512l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0L64 0 352 0zm0 384L96 384l0 64 256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32zM138.7 208l13.9 24-27.7 0 13.9-24zm-13.9-24L97.1 232c-6.2 10.7 1.5 24 13.9 24l55.4 0 27.7 48c6.2 10.7 21.6 10.7 27.7 0l27.7-48 55.4 0c12.3 0 20-13.3 13.9-24l-27.7-48 27.7-48c6.2-10.7-1.5-24-13.9-24l-55.4 0L221.9 64c-6.2-10.7-21.6-10.7-27.7 0l-27.7 48L111 112c-12.3 0-20 13.3-13.9 24l27.7 48zm27.7 0l27.7-48 55.4 0 27.7 48-27.7 48-55.4 0-27.7-48zm0-48l-13.9 24-13.9-24 27.7 0zm41.6-24L208 88l13.9 24-27.7 0zm69.3 24l27.7 0-13.9 24-13.9-24zm13.9 72l13.9 24-27.7 0 13.9-24zm-55.4 48L208 280l-13.9-24 27.7 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FaBookTanakh;
