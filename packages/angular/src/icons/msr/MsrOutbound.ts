import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-outbound",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrOutbound {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M580-538v94q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63 12.83 0 21.33-8.62T640-444v-166q0-12.75-8.62-21.37T610-640H444q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T444-580h93L325-368q-9 9-9 21.16 0 12.16 8.61 21Q334-317 346.47-317q12.47 0 21.53-9l212-212ZM480.27-80q-82.73 0-155.5-31.5t-127.27-86q-54.5-54.5-86-127.34Q80-397.68 80-480.5q0-82.82 31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880q82.82 0 155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.73-31.5 155.5T763-197.68q-54 54.32-127 86Q563-80 480.27-80Zm0.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721 622.38-820 480-820q-141 0-240.5 98.81Q140-622.37 140-480q0 141 99.5 240.5t241 99.5Zm-0.5-340Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrOutbound;
