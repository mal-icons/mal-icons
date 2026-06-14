import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-appcenter-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevAppcenterIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m185.7 0 102.9 23v166.2L460 69.2v138.5L288.6 300 460 392.3v138.5l-171.4-120v166.1L185.7 600 3 438.5v-69.3L108.4 300 2.9 230.8v-69.3zm0 346.1-128 64.7 128 96.9zm0-253.8-128 97 128 64.6zm411.4 23.1L460 69.2v461.6l137-46.2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevAppcenterIcon;
