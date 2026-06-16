import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-playlist-add-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPlaylistAddCircle {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M610-370v50q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63 12.83 0 21.33-8.62T670-320v-50h50q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T720-430h-50v-50q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62-12.82 0-21.32 8.63T610-480v50h-50q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T560-370h50Zm-285 10h30q14 0 24.5-10.5T390-395q0-14-10.5-24.5T355-430h-30q-14 0-24.5 10.5T290-395q0 14 10.5 24.5T325-360Zm-5-130h200q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T520-550H320q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T320-490Zm0-120h200q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T520-670H320q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T320-610ZM480.27-80q-82.73 0-155.5-31.5t-127.27-86q-54.5-54.5-86-127.34Q80-397.68 80-480.5q0-82.82 31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880q82.82 0 155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.73-31.5 155.5T763-197.68q-54 54.32-127 86Q563-80 480.27-80Zm0.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721 622.38-820 480-820q-141 0-240.5 98.81Q140-622.37 140-480q0 141 99.5 240.5t241 99.5Zm-0.5-340Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPlaylistAddCircle;
