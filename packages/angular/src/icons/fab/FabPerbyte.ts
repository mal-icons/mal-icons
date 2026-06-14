import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fab-perbyte",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FabPerbyte {
  readonly viewBox = "0 0 448 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M305.31,284.58H246.6V383.3h58.71q24.42,0,38.19-13.77t13.77-36.11q0-21.83-14.03-35.33T305.31,284.58ZM149.44,128.7H90.72v98.72h58.71q24.42,0,38.19-13.77t13.77-36.11q0-21.83-14.03-35.34T149.44,128.7ZM366.65,32H81.35A81.44,81.44,0,0,0,0,113.35V398.65A81.44,81.44,0,0,0,81.35,480H366.65A81.44,81.44,0,0,0,448,398.65V113.35A81.44,81.44,0,0,0,366.65,32Zm63.64,366.65a63.71,63.71,0,0,1-63.63,63.64H81.35a63.71,63.71,0,0,1-63.63-63.63V113.35A63.71,63.71,0,0,1,81.35,49.72H366.65a63.71,63.71,0,0,1,63.64,63.63ZM305.31,128.7H246.6v98.72h58.71q24.42,0,38.19-13.77t13.77-36.11q0-21.83-14.03-35.34T305.31,128.7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FabPerbyte;
