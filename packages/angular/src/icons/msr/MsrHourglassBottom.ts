import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-hourglass-bottom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrHourglassBottom {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-522q69 0 116.5-50.52T644-694v-126H316v126q0 70.95 47.5 121.48Q411-522 480-522ZM770-80H190q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T190-140h66v-127q0-70 36.5-128.5T394-480q-65-26-101.5-85T256-694v-126h-66q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T190-880h580q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T770-820h-66v126q0 70-37 129t-101 85q65 26 101.5 84.5T704-267v127h66q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5Q800-97 791.38-88.5T770-80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrHourglassBottom;
