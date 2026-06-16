import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-biotech",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBiotech {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M200-120v-60h208v-104h-15q-81 0-137-56t-56-137q0-61 35-111t92-70q4-40 35-65t72-22l-21-59 41-14.56L440-856l66-24 14 37 40-14 113 295-43 15 14 37-64 23-14-37-43 16-25-68q-15 17-35.5 24.5t-43.83 6.5Q393-546 371-561t-35-38q-35 17-55.5 49.97T260-477q0 55.42 38.79 94.21Q337.58-344 393-344h347v60H508v104h252v60H200Zm356-452 53-19-80-206-53 19 80 206Zm-130.18-23Q447-595 461.5-609.33q14.5-14.32 14.5-35.5Q476-666 461.68-680.5q-14.32-14.5-35.5-14.5Q405-695 390.5-680.67q-14.5 14.32-14.5 35.5Q376-624 390.33-609.5q14.32 14.5 35.5 14.5ZM556-572Zm-130-75Zm2 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBiotech;
