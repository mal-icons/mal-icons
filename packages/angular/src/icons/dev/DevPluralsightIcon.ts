import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-pluralsight-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevPluralsightIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-pluralsight-icon-2-a)"}],["path",{"fill":"currentColor","d":"M600 300a300 300 0 1 1-600 0 300 300 0 0 1 600 0"}],["path",{"fill":"currentColor","d":"M222.9 144v312l270-155.9zm25.8 44.9 192.5 111-192.5 111.2z"}],["path",{"fill":"currentColor","d":"M160.8 178.1v243.7l211-121.8zm25.9 44.8 133.5 77-133.5 77.2z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevPluralsightIcon;
