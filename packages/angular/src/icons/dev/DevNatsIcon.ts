import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-nats-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevNatsIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M300 0h289.8v235H300z"}],["path",{"fill":"currentColor","d":"M10.2 0H300v235H10.2z"}],["path",{"fill":"currentColor","d":"M589.8 235.1v235H399.2V600L257.4 470.5l42.6-1.7V235z"}],["path",{"fill":"currentColor","d":"M300 235.1v273.2l-42.6-37.8H10.2V235z"}],["path",{"fill":"currentColor","d":"M420 303.8V109.3h69.3v251.5h-105l-211.9-198V361H103V109.3h108.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevNatsIcon;
