import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-power-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoPowerOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M382-120v-118L240-394v-215q0-25 17-42.5t41-17.5l60 60h-58v191l142 155.7V-180h76v-82l49-54L67-816l42-42 750 750-42 42-207-207-32 35v118H382Zm310-240-32-32v-217H443L342-710v-130h60v171h156v-171h60v201l-30-30h72q24.75 0 42.38 17.63T720-609v217l-28 32ZM553-499Zm-114 55Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoPowerOff;
