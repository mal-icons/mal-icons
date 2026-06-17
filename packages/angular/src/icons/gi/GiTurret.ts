import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-turret",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTurret {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M130.72 61C106 61.11 106 62.88 106 91H76l-15 30v60l15 30h30c0 30 0 30 30 30h120c30 0 30 0 30-30h15l15-30h180v-60H316l-15-30h-15c0-30 0-30-30-30H136c-1.87 0-3.63-0.01-5.28 0zM166 271a15 15 0 0 0-15 15v45a15 15 0 0 0 15 15h60a15 15 0 0 0 15-15v-45a15 15 0 0 0-15-15h-60zm-15 105c-30 0-45 30-45 30-15 0-30 0-30 15l-60 15v15h360v-15l-60-15c0-15-15-15-30-15 0 0-15-30-45-30h-90z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTurret;
