import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-digital-out-of-home",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDigitalOutOfHome {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0-40v-880h420v880h-60v-90H60v90H0Zm605 0v-253l92-83-20-137q-45 61-93 80t-104 22v-60q56 0 93-23.5t63-65.5l39-62q15-23 41.5-31.5T768-651l192 81v173h-61v-133l-102-46L914-40h-62l-79-298-108 98v200h-60ZM60-190h300v-670H60v670Zm95-259 125-71-125-71v142Zm527-235q-30 0-51.5-21.5T609-757q0-30 21.5-51.5T682-830q30 0 51.5 21.5T755-757q0 30-21.5 51.5T682-684ZM60-190h300H60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDigitalOutOfHome;
