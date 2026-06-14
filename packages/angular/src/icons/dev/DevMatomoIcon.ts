import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-matomo-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevMatomoIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M587.1 337.8h0.1l-1.5-2.4-0.7-1-106.8-162.7L340 274.6 441 430l1.3 2 0.50.8a86.3 86.3 0 0 0 144.3-95"}],["path",{"fill":"currentColor","d":"M173 383a86.5 86.5 0 1 0-173 0 86.5 86.5 0 0 0 173 0"}],["path",{"fill":"currentColor","d":"M404.9 130.5a86.5 86.5 0 0 1 71.6 135L374 425.5a87 87 0 0 1-5 7.7l-0.7 1a86.2 86.2 0 0 1-139.1 0h-0.1l-68.4-95.8a86.3 86.3 0 0 0-145.6-3.8l104.5-163h0.1a86.3 86.3 0 0 1 147 0h0.2l65.6 92.9a86.5 86.5 0 0 1 72.2-134"}],["path",{"fill":"currentColor","d":"M587.1 337.8h0.1l-1.5-2.4-0.7-1-106.8-162.7L340 274.6 441 430l1.3 2 0.50.8a86.3 86.3 0 0 0 144.3-95"}],["path",{"fill":"currentColor","d":"M587.1 337.8h0.1l-1.5-2.4-0.7-1-106.8-162.7L340 274.6 441 430l1.3 2 0.50.8a86.3 86.3 0 0 0 144.3-95"}],["g",{"filter":"url(#devicon-matomo-icon-3-a)","mask":"url(#devicon-matomo-icon-2-b)"}],["path",{"fill":"currentColor","d":"M491.3 217a86.5 86.5 0 1 0-158.6 47.5L267 171.7h-0.1a86.3 86.3 0 0 0-147.1 0l-104.6 163a86.4 86.4 0 0 1 145.5 3.7h0.1l68.4 95.9a86.2 86.2 0 0 0 139.1 0h0.1l0.7-1.1q2.7-3.7 5-7.8l102.4-160a86 86 0 0 0 14.8-48.4m-145.7 62.8 1.5 1.4zm7.7 6.4 1.7 1.3zm19 10.8 2.20.8zm19.3 5.3 3 0.5zm23.30.5 3.1-0.5zm19.7-4.8 2.7-1zm19.6-10 2.1-1.7zm14.6-13 1.9-2z"}],["path",{"fill":"currentColor","d":"M491 217a86.5 86.5 0 1 0-173 0 86.5 86.5 0 0 0 173 0"}],["path",{"fill":"currentColor","d":"M404.5 303.4a86 86 0 0 1-72.2-39l-65.7-92.7a86.3 86.3 0 0 0-147.1 0h-0.1l-104.6 163a86.4 86.4 0 0 1 145.6 3.7h0.1l68.3 95.9h0.1a86.3 86.3 0 0 0 139 0h0.2l0.7-1.1q2.7-3.7 5-7.8l102.3-160a86 86 0 0 1-71.6 38"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevMatomoIcon;
