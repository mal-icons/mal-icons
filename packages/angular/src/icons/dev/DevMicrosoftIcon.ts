import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-microsoft-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevMicrosoftIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-microsoft-icon-1-a)"}],["path",{"fill":"currentColor","d":"M285.2 285.2H0V0h285.2z"}],["path",{"fill":"currentColor","d":"M600 285.2H314.8V0H600z"}],["path",{"fill":"currentColor","d":"M285.1 600H0V314.8h285.1z"}],["path",{"fill":"currentColor","d":"M600 600H314.8V314.8H600z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevMicrosoftIcon;
