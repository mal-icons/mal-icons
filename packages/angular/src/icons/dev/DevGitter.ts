import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-gitter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevGitter {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-gitter-2-a)"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}],["path",{"fill":"currentColor","d":"M196.7 147.4H226V341h-29.3zm178.4 47h29.4V341h-29.4zm-118.5 0h29.3v258.8h-29.3zm58.7 0h29.3v258.8h-29.3z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevGitter;
