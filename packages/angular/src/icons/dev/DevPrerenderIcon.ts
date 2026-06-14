import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-prerender-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevPrerenderIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M150 75v150h75a75 75 0 0 0 75-75V75z"}],["path",{"fill":"currentColor","d":"M75 75a75 75 0 0 0-75 75v300a75 75 0 0 0 75 75h75V75z"}],["path",{"fill":"currentColor","d":"M375 375a75 75 0 0 0-75 75v75h150V375z"}],["path",{"fill":"currentColor","d":"M525 75h-75v450h75a75 75 0 0 0 75-75V150a75 75 0 0 0-75-75"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevPrerenderIcon;
