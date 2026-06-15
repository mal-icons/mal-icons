import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-network-drive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrNetworkDrive {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke":"currentColor","stroke-width":"2","d":"M12 14v4M22 6v6a1 1 0 1-1 1H3a1 1 0 1-1-1V6a1 1 0 11-1h18a1 1 0 11 1zM12 21a2 2 0 100-4 2 2 0 0 4zM6 10a1 1 0 100-2 1 1 0 0 2z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrNetworkDrive;
