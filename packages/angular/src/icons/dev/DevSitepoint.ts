import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-sitepoint",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevSitepoint {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"fill-rule":"evenodd","clip-path":"url(#devicon-sitepoint-1-a)","clip-rule":"evenodd"}],["path",{"fill":"currentColor","d":"m538.2 336.8-44.3-42.4L354.1 166l-60.3 57.3a19.4 19.4 0 0 0 1 24.6l55.2 47.5h-0.2l59.3 56.7c7 7.8 6.8 19.4-0.5 26.9L248.8 530.7l72.6 69.3 216.8-206a39 39 0 0 0 0-57.3"}],["path",{"fill":"currentColor","d":"m61.8 263.3 44.2 42.2L246 434l60.2-57.2a19.5 19.5 0 0 0-1.1-24.7L250 304.6l0.2-0.1-59.3-56.6c-7-7.8-6.8-19.40.5-26.8L351.2 69 278.5 0 61.8 206a39.3 39.3 0 0 0 0 57.3"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevSitepoint;
