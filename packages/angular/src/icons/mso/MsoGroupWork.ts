import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-group-work",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoGroupWork {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M387-320q31 0 52-21.42 21-21.42 21-51.5 0-30.08-21-51.58T387.5-466q-30.5 0-52 21.42-21.5 21.42-21.5 51.5 0 30.08 21.44 51.58T387-320Zm185.92 0q30.08 0 51.58-21.42 21.5-21.42 21.5-51.5 0-30.08-21.42-51.58-21.42-21.5-51.5-21.5-30.08 0-51.58 21.42-21.5 21.42-21.5 51.5 0 30.08 21.42 51.58 21.42 21.5 51.5 21.5Zm-93-187q30.08 0 51.58-21t21.5-51.5q0-30.5-21.42-52-21.42-21.5-51.5-21.5-30.08 0-51.58 21.44T407-580q0 31 21.42 52 21.42 21 51.5 21Zm0.35 427q-82.73 0-155.5-31.5t-127.27-86q-54.5-54.5-86-127.34Q80-397.68 80-480.5q0-82.82 31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880q82.82 0 155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.73-31.5 155.5T763-197.68q-54 54.32-127 86Q563-80 480.27-80Zm0.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721 622.38-820 480-820q-141 0-240.5 98.81Q140-622.37 140-480q0 141 99.5 240.5t241 99.5Zm-0.5-340Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoGroupWork;
