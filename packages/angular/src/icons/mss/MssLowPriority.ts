import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-low-priority",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLowPriority {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m325-132-42-42 64-66q-110 0-188.5-75T80-500q0-107 74.5-183.5T336-760h152v60H336q-82 0-139 58.5T140-500q0 85 62.5 142.5T352-300l-66-66 42-42 136 137-139 139Zm247-108v-60h308v60H572Zm0-230v-60h308v60H572Zm-24-230v-60h332v60H548Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLowPriority;
