import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-stability-ai-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevStabilityAiIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M169.7 549c116 0 191.4-61.5 191.4-153.8 0-71.7-45.9-117.2-127.9-136l-52.6-15.9c-46.2-10.4-73.2-22.8-66.9-54.6 5.3-26.5 21.1-41.4 58-41.4 116.8 0 160.1 41.4 160.1 41.4V89s-42.2-38-160.2-38C60.4 51 0 108.2 0 196.8 0 268.6 41.8 310.2 126.7 330l9 2.3q19.5 6 52.3 15.8c43.4 10.4 54.6 21.4 54.6 54.4 0 30.2-31.4 47.3-72.9 47.3C50.2 449.8 0 389.4 0 389.4v110.3S31.4 549 169.7 549"}],["path",{"fill":"currentColor","d":"M528.4 541.5c41 0 71.6-29.7 71.6-69.9 0-41-29.7-69.8-71.6-69.8-41 0-70.8 28.8-70.8 69.8s29.7 69.9 70.8 69.9"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevStabilityAiIcon;
