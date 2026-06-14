import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-json",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevJson {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-json-3-a)"}],["path",{"fill":"currentColor","d":"M299.5 446.6C432.2 627.6 562 396.1 562 257 561.7 92.3 395 0.4 299.40.4 146 0.4 0 127 0 300.5 0 493.2 167.4 600 299.4 600c-29.9-4.3-129.4-25.6-130.8-254.9-0.9-155 50.6-217 130.6-189.7 1.80.6 88.1 34.7 88.1 146 0 110.9-87.8 145.2-87.8 145.2"}],["path",{"fill":"currentColor","d":"M299.3 155.3c-87.7-30.3-195.1 42-195.1 186.8 0 236.4 175.2 257.9 196.4 257.9C454 600 600 473.3 600 299.9 600 107 432.60.4 300.60.4c36.6-5 197 39.5 197 258.9 0 143-119.8 220.9-197.7 187.6-1.8-0.7-88.2-34.8-88.2-146 0-111 87.6-145.6 87.6-145.6"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevJson;
