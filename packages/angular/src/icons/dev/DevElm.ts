import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-elm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevElm {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"fill":"currentColor","clip-path":"url(#devicon-elm-1-a)"}],["path",{"d":"m20 600 279.8-279.8L579.7 600zM0 20.3l279.8 279.9L0 580z"}],["path",{"fill-opacity":".8","d":"M320.1 0H600v279.9z"}],["path",{"d":"m319.8 300.2 130 129.9 129.9-130-130-129.9z"}],["path",{"fill-opacity":".8","d":"M20 0.3h259.8l122 122H141.9zm409.8 150-130 129.9-129.9-130zM599.7 580l-130-130 130-129.8z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevElm;
