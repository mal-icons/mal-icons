import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-flattr-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevFlattrIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-flattr-icon-1-a)"}],["path",{"fill":"currentColor","d":"M600 66.7V300a300 300 0 0 1-300 300H52.4l150.8-154.4 33.6 33.6-73.2 73 38.20.1H300A252.6 252.6 0 0 0 552.3 300V110.7zM547.6 0 396.8 154.4l-33.6-33.6 73.2-73-38.2-0.1H300A252.6 252.6 0 0 0 47.7 300v189.3L0 533.3V300A300 300 0 0 1 300 0z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevFlattrIcon;
