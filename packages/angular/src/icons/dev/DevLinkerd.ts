import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-linkerd",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevLinkerd {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-linkerd-7-a)"}],["path",{"fill":"currentColor","d":"m558.3 352.7 41.7 24V150.9l-41.7-24zM0 150.8v226l41.7-24v-226zM183.4 555l41.6 24 99.2-57.2-41.6-24z"}],["path",{"fill":"currentColor","d":"m241.7 521.3 41.7 24 40.8-23.5-41.6-24z"}],["path",{"fill":"currentColor","d":"M395.8 485.2v-48L216.4 333.4l-12.2 7.1v34zm-191.6-4.8L375 579.1l41.7-24.1-212.5-122.7z"}],["path",{"fill":"currentColor","d":"m456.4 185.7 41.6 24 102-58.9-41.7-24zM321 311.9l-41.6-24-96 55.4 41.6 24zM508.4 98l-41.7-24.1-102 58.8 41.7 24.1zm-279 161-41.6-24-96.1 55.4 41.7 24zM273 79.8l41.7 24 102-58.8L375 21zM0 237.5l41.7 24 96-55.4L96.2 182z"}],["path",{"fill":"currentColor","d":"M558.3 261.5v211.7l41.7-24V237.4z"}],["path",{"fill":"currentColor","d":"M508.3 502V290.5l-41.6 24v211.7z"}],["path",{"fill":"currentColor","d":"M375 367.4V579l41.7-24.1V343.3z"}],["path",{"fill":"currentColor","d":"m183.4 555 41.6 24V367.5l-41.6-24.1z"}],["path",{"fill":"currentColor","d":"M133.4 314.4v211.7l-41.7-24V290.4z"}],["path",{"fill":"currentColor","d":"m0 449.2 41.7 24V261.5L0 237.5z"}],["path",{"fill":"currentColor","d":"m241.7 309.6 41.6 24 37.8-21.7-41.7-24zM58.4 203.8l41.6 24 37.8-21.7L96 182zm91.6 52.9 41.7 24 37.7-21.7-41.6-24z"}],["path",{"fill":"currentColor","d":"m225 21-41.7 24 375 216.5 41.7-24zm-91.7 52.9-41.6 24 375 216.5 41.6-24zM0 150.8l375 216.5 41.7-24-375-216.5z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevLinkerd;
