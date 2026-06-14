import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-maildeveloper",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevMaildeveloper {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M50 485.3v-98.8h300v98.8z"}],["path",{"fill":"currentColor","d":"M0 485.3V114.7h100l100 98.8 100-98.8h100s200 0 200 185.3-200 185.3-200 185.3H300v-247L200 337l-100-98.9v247zm400-271.8v173s98 0 100-86.5-100-86.5-100-86.5"}],["path",{"fill":"currentColor","d":"M592.4 242.1q7.4 25.4 7.6 57.9c0 185.3-200 185.3-200 185.3V164s120.4 20.6 192.4 78M400 213.5v173s98 0 100-86.5-100-86.5-100-86.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevMaildeveloper;
