import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-battery-saver",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBatterySaver {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-50q0-12.75 8.63-21.37T430-880h100q12.75 0 21.38 8.63T560-850v50h80q17 0 28.5 11.5T680-760v640q0 17-11.5 28.5T640-80H320Zm160.18-244q12.83 0 21.33-8.62T510-354v-54h54q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T564-468h-54v-54q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62-12.82 0-21.32 8.63T450-522v54h-54q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T396-408h54v54q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBatterySaver;
