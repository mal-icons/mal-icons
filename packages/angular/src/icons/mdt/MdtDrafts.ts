import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-drafts",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtDrafts {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m12 15.36-8-5.02V18h16l-0.01-7.63z","opacity":".3"}],["path",{"d":"M21.99 8c0-0.72-0.37-1.35-0.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2l-0.01-10zM12 3.32 19.99 8v0.01L12 13 4 8l8-4.68zM4 18v-7.66l8 5.02 7.99-4.99L20 18H4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtDrafts;
