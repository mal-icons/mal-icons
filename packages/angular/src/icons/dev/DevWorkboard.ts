import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-workboard",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevWorkboard {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-workboard-1-a)"}],["path",{"fill":"currentColor","d":"M600 300a300 300 0 1 1-600 0 300 300 0 0 1 600 0"}],["path",{"fill":"currentColor","d":"M239 258v-81.3l130.8 44zm130.8 128.2L239 426v-82zm86.6-194.7L239 114V76.4h-60v447.5h60v-34.8l217.4-66.5v-60l-160.3-60 160.3-50.1z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevWorkboard;
