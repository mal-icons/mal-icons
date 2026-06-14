import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-chroma",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevChroma {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M400 492c110.5 0 200-86 200-192s-89.5-192-200-192-200 86-200 192 89.5 192 200 192"}],["path",{"fill":"currentColor","d":"M200 492c110.5 0 200-86 200-192s-89.5-192-200-192S0 194 0 300s89.5 192 200 192"}],["path",{"fill":"currentColor","d":"M400 300c0 106-89.5 192-200 192V300zm-200 0c0-106 89.5-192 200-192v192z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevChroma;
