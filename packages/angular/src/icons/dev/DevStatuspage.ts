import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-statuspage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevStatuspage {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M300 520.7a140.3 140.3 0 1 0 0-280.6 140.3 140.3 0 0 0 0 280.6"}],["path",{"fill":"currentColor","d":"m3.8 218.2 75.4 89.4a16 16 0 0 0 22.9 1.6c122.1-109.5 273.4-109.5 395.8 0a16 16 0 0 0 22.9-1.6l75.4-89.4a16 16 0 0 0-1.8-22.6c-177-155-411.5-155-588.8 0a16 16 0 0 0-1.8 22.6"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevStatuspage;
