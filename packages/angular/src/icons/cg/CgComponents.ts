import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-components",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgComponents {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.76 6.34L12 2.1L16.24 6.34L12 10.59L7.76 6.34ZM10.59 6.34L12 4.93L13.41 6.34L12 7.76L10.59 6.34Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2.1 12L6.34 7.76L10.59 12L6.34 16.24L2.1 12ZM4.93 12L6.34 10.59L7.76 12L6.34 13.41L4.93 12Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.41 12L17.66 16.24L21.9 12L17.66 7.76L13.41 12ZM17.66 10.59L16.24 12L17.66 13.41L19.07 12L17.66 10.59Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.76 17.66L12 13.41L16.24 17.66L12 21.9L7.76 17.66ZM10.59 17.66L12 16.24L13.41 17.66L12 19.07L10.59 17.66Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgComponents;
